document.addEventListener("DOMContentLoaded", () => {

    
    // Get delete buttons
    const deleteBtns = document.querySelectorAll(".delete-btn");
    console.log(deleteBtns)
    
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", async () => {
            const noteId = btn.getAttribute("data-id");

            const response = await fetch(`/notes/${noteId}`, {
                method: "DELETE",
            })
            if(response.ok) {
                const noteLi = btn.parentNode;
                noteLi.remove()
            }
    
        })
    });

    // Get Edit Buttons
    const editButtons = document.querySelectorAll(".edit-btn")

    editButtons.forEach(btn => {

        btn.addEventListener("click", async () => {
            const noteDiv = btn.parentNode.firstChild;
            if(btn.textContent == "Edit") {
                noteDiv.setAttribute("contentEditable", true)
                noteDiv.focus();
                btn.textContent = "Save";
            } else {

                const noteId = btn.getAttribute("data-id")
                const noteText = noteDiv.textContent

                const response = await fetch(`notes/${noteId}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        noteText: noteText,
                    })
                })

                if(response.ok) {
                    btn.textContent = "Edit"
                }
                noteDiv.setAttribute("contentEditable", false)
            }
        })
    })
})  