let timelineList= document.getElementById("timeline");
let modal= document.getElementById("modal");
let modalContent= document.getElementById("modalContent");
let modalImage= document.getElementById("modalImage");
let modalTitle= document.getElementById("modalTitle");
let modalYear= document.getElementById("modalYear");
let modalDescription= document.getElementById("modalDescription");
let modalCategory= document.getElementById("modalCategory");
let modalClose=document.getElementById("closeModal");

fetch("events.json")
    .then(res => res.json())
    .then(events => {
        events.forEach(event=>{
            const eventDiv=document.createElement("div");
            eventDiv.innerHTML=`<div class="timeline_dot"></div>
            <div class="timeline_label">${event.year} - ${event.title}</div>`;
            eventDiv.addEventListener("click", ()=>{
                modalImage.src=event.imageURL;
                modalTitle.textContent=event.title;
                modalYear.textContent=`Year: ${event.year}`;
                modalDescription.textContent=event.description;
                modalCategory.textContent=`Category: ${event.category}`;
                modal.classList.add("active");
            });

            timelineList.appendChild(eventDiv);


        })
    }) 
    .catch(e=>console.error("Error occured while loading events to timeline: ", e));
    modalClose.addEventListener("click", ()=>{
        modal.classList.remove("active");
    })

    modal.addEventListener("click", (e) => {
        if (e.target === modal) { 
            modal.classList.remove("active");
        }
    });

    

    