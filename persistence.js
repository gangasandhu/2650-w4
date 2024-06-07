let _notes = [
    { id: "2", text: "CPSC 2650" },
    { id: "1", text: "An awesome web dev Note" },
  ];
  
  // TODO: implement addNote and removeNote

  // For fun: why do we export a function instead of notes directly?
  const notes = () => _notes;
  
  export { notes };