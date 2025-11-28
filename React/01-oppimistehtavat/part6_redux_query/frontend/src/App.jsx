import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNotes, createNote, updateNote } from "./requests";

const App = () => {
  console.log("%c▶ App render", "color: orange; font-weight: bold;");

  const queryClient = useQueryClient();

  // ----------------------------
  // ADD NEW NOTE MUTATION
  // ----------------------------
  const newNoteMutation = useMutation({
    mutationFn: createNote,

    onMutate: (vars) => {
      console.log(
        "%c[Mutation → createNote] onMutate: отправляем данные:",
        "color: #888",
        vars
      );
    },

    onSuccess: (newNote) => {
      console.log(
        "%c✔ [Mutation → createNote] SUCCESS. Сервер вернул:",
        "color: green; font-weight: bold;",
        newNote
      );

      const notes = queryClient.getQueryData(["notes"]);
      console.log(
        "%c📦 Текущий кэш ['notes'] перед обновлением:",
        "color: #6cf",
        notes
      );

      queryClient.setQueryData(["notes"], notes.concat(newNote));

      console.log(
        "%c📦 Кэш ['notes'] после добавления новой заметки:",
        "color: #0af",
        queryClient.getQueryData(["notes"])
      );
    },

    onError: (err) => {
      console.log("%c❌ createNote ERROR:", "color: red", err);
    },

    onSettled: () => {
      console.log("%c[Mutation → createNote] SETTLED", "color: gray");
    },
  });

  // ----------------------------
  // UPDATE NOTE MUTATION
  // ----------------------------
  const updateNoteMutation = useMutation({
    mutationFn: updateNote,

    onSuccess: (updatedNote) => {
      console.log(
        "%c✔ [Mutation → updateNote] Успешный update:",
        "color: green",
        updatedNote
      );

      const notes = queryClient.getQueryData(["notes"]);
      console.log("%c📦 Кэш до обновления:", "color: #6cf", notes);

      const newList = notes.map((n) =>
        n.id === updatedNote.id ? updatedNote : n
      );

      queryClient.setQueryData(["notes"], newList);

      console.log("%c📦 Кэш после обновления:", "color: #0af", newList);
    },

    onError: (err) => {
      console.log("%c❌ updateNote ERROR:", "color: red", err);
    },
  });

  // ----------------------------
  // HANDLE FORM SUBMIT
  // ----------------------------
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";

    console.log(
      "%c▶ addNote() — отправляем новую заметку:",
      "color: purple",
      content
    );

    newNoteMutation.mutate({ content, important: true });
  };

  // ----------------------------
  // HANDLE TOGGLE
  // ----------------------------
  const toggleImportance = (note) => {
    console.log(
      "%c▶ toggleImportance() — обновляем заметку:",
      "color: purple",
      note.id
    );

    updateNoteMutation.mutate({ ...note, important: !note.important });
  };

  // ----------------------------
  // MAIN QUERY
  // ----------------------------
  const result = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,

    refetchOnWindowFocus: false,

    onSuccess: (data) => {
      console.log(
        "%c✔ useQuery SUCCESS (получены заметки):",
        "color: green; font-weight:bold;",
        data
      );
    },

    onError: (err) => {
      console.log("%c❌ useQuery ERROR:", "color: red", err);
    },
  });

  // Лог всего объекта result
  console.log(
    "%c🎯 useQuery state:",
    "color: blue; font-weight:bold;",
    JSON.parse(JSON.stringify(result))
  );

  if (result.isLoading) {
    console.log("%c⌛ useQuery loading...", "color: gray");
    return <div>loading data...</div>;
  }

  const notes = result.data;

  return (
    <div>
      <h2>Notes app</h2>

      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>

      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "important" : "not important"}</strong>
        </li>
      ))}
    </div>
  );
};

export default App;

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { getNotes, createNote, updateNote } from "./requests";

// // React Query вызывает ререндер каждый раз, когда изменяется:
// // status (loading → success)
// // data
// // error
// // stale status
// // fetch state
// const App = () => {
//   const queryClient = useQueryClient();
//   const newNoteMutation = useMutation({
//     mutationFn: createNote,
//     //onSuccess: () => {
//     onSuccess: (newNote) => {
//       const notes = queryClient.getQueryData(["notes"]);
//       queryClient.setQueryData(["notes"], notes.concat(newNote)); // обновляем кэш вручную
//       console.log("Added cashe:");
//     },
//     // queryClient.invalidateQueries({ queryKey: ["notes"] });
//     // помечает кэш с ключом ['notes'] как устаревший
//     // React Query автоматически делает новый GET-запрос (getNotes)
//     // компонент получает обновлённые данные
//     // на экране появляется новая заметка
//   });

//   const updateNoteMutation = useMutation({
//     mutationFn: updateNote,
//     onSuccess: (updatedNote) => {
//       // queryClient.invalidateQueries({ queryKey: ["notes"] });

//       const notes = queryClient.getQueryData(["notes"]);
//       const newList = notes.map((n) =>
//         n.id === updatedNote.id ? updatedNote : n
//       );
//       queryClient.setQueryData(["notes"], newList);
//     },
//   });

//   const addNote = async (event) => {
//     event.preventDefault();
//     const content = event.target.note.value;
//     event.target.note.value = "";
//     console.log(content);
//     newNoteMutation.mutate({ content, important: true });
//     // вызываем mutate
//     // сервер создаёт заметку
//     // onSuccess → invalidateQueries
//     // React Query сам перезагружает список заметок
//     // UI обновляется
//   };

//   const toggleImportance = (note) => {
//     console.log("toggle importance of", note.id);
//     updateNoteMutation.mutate({ ...note, important: !note.important });
//   };
//   //queryKey: ['notes'] — уникальный ключ для этого запроса. Используется для кэширования и обновлений.
//   //queryFn — функция, которая делает фактический HTTP-запрос.
//   //useQuery возвращает объект с полями:
//   const result = useQuery({
//     queryKey: ["notes"],
//     queryFn: getNotes,
//     refetchOnWindowFocus: false, // отключаем автообновление при фокусе окна
//   });

//   console.log(JSON.parse(JSON.stringify(result)));

//   if (result.isLoading) {
//     return <div>loading data...</div>;
//   }

//   const notes = result.data;

//   return (
//     <div>
//       <h2>Notes app</h2>
//       <form onSubmit={addNote}>
//         <input name="note" />
//         <button type="submit">add</button>
//       </form>
//       {notes.map((note) => (
//         <li key={note.id} onClick={() => toggleImportance(note)}>
//           {note.content}
//           <strong> {note.important ? "important" : "not impotant"}</strong>
//         </li>
//       ))}
//     </div>
//   );
// };

// export default App;
