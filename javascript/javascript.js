document.getElementById("Segenbut").onclick = () => {
    window.location.href = "../html/SengenParkTrail.html";
};

document.getElementById("PinBut").onclick = () => {
    window.location.href = "../html/PineTree.html";
};

document.getElementById("Oberbut").onclick = () => {
    window.location.href ="../html/Oberstdorf.html";
};

document.getElementById("Glacierbut").onclick = () => {
    window.location.href =  "../html/Glacier.html";
};

document.getElementById("Gilabut").onclick = () => {
    window.location.href = "../html/Gila.html";
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("visitorform");
    const posts = document.getElementById("visitorforum");
    const message = document.getElementById("message"); // Only if you add it

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("visitorname").value;
        const date = document.getElementById("dateofvisit").value;

        const entry = document.createElement("div");
        entry.classList.add("forum-entry");

        entry.innerHTML = `
            <strong>${name}</strong> <em>(${date})</em>
        `;

        posts.prepend(entry);

        if (message) {
            message.style.display = "block";
            message.textContent = "Thanks for posting, " + name + "!";

            setTimeout(() => {
                message.style.display = "none";
            }, 3000);
        }

        form.reset();
    });
});
