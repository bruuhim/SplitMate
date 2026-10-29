let groups = [
  {
    id: 1,
    name: "Weekend Trip",
    description: "Expenses for our weekend getaway",
    currency: "USD",
    startDate: "2026-10-10",
    closed: false,
  },
  {
    id: 2,
    name: "Apartment",
    description: "Rent, groceries, and shared bills",
    currency: "USD",
    startDate: "2026-09-01",
    closed: false,
  },
  {
    id: 3,
    name: "Dinner Club",
    description: "Restaurant bills and dinners with friends",
    currency: "USD",
    startDate: "2026-10-15",
    closed: false,
  },
  {
    id: 4,
    name: "Spain Vacation",
    description: "Flights, hotels, and activities",
    currency: "EUR",
    startDate: "2026-07-05",
    closed: true,
  },
  {
    id: 5,
    name: "Birthday Gift",
    description: "Money collected for a surprise birthday gift",
    currency: "USD",
    startDate: "2026-10-20",
    closed: false,
  },
];

let members = [
  { id: 1, groupId: 1, name: "Alex Morgan", username: "alex" },
  { id: 2, groupId: 1, name: "Jamie Chen", username: "jamie" },
  { id: 3, groupId: 1, name: "Taylor Smith", username: "taylor" },
  { id: 4, groupId: 1, name: "Jordan Lee", username: "jordan" },

  { id: 5, groupId: 2, name: "Alex Morgan", username: "alex" },
  { id: 6, groupId: 2, name: "Sam Wilson", username: "sam" },
  { id: 7, groupId: 2, name: "Casey Brown", username: "casey" },

  { id: 8, groupId: 3, name: "Jamie Chen", username: "jamie" },
  { id: 9, groupId: 3, name: "Taylor Smith", username: "taylor" },
  { id: 10, groupId: 3, name: "Morgan Davis", username: "morgan" },

  { id: 11, groupId: 4, name: "Jordan Lee", username: "jordan" },
  { id: 12, groupId: 4, name: "Sam Wilson", username: "sam" },
  { id: 13, groupId: 4, name: "Casey Brown", username: "casey" },
  { id: 14, groupId: 4, name: "Alex Morgan", username: "alex" },
  { id: 15, groupId: 4, name: "Morgan Davis", username: "morgan" },

  { id: 16, groupId: 5, name: "Taylor Smith", username: "taylor" },
  { id: 17, groupId: 5, name: "Jamie Chen", username: "jamie" },
];

let groupsCounter = document.getElementById("groups-title");
let groupsList = document.getElementById("groups-list");
let memberstableBody = document.getElementById("members-table-body");

// i add groups from groups array object to html using innerhtml
function displayGroups(groups) {
  groupsCounter.textContent = `Your groups (${groups.length})`;
  groupsList.innerHTML = "";

  groups.forEach((group) => {
    let memberCount = members.filter(
      (member) => member.groupId === group.id,
    ).length;

    groupsList.innerHTML += `
      <div
        id="${group.id}"
        data-id="${group.id}"
        data-name="${group.name}"
        class="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-center gap-4 hover:bg-gray-50 transition-colors"
      >
        <div>
          <img src="assets/icon/Folder.svg" alt="Folder Icon" />
        </div>

        <div>
          <span class="font-semibold text-gray-900">${group.name}</span>
          <p class="text-sm text-gray-500">${memberCount} members</p>
        </div>
      </div>`;
  });

  selectGroup();
}

function selectGroup() {
  let groupCards = groupsList.querySelectorAll("[data-id]");

  groupCards.forEach((groupCard) => {
    groupCard.addEventListener("click", () => {
      groupCards.forEach((card) => {
        card.classList.remove("ring-2", "ring-blue-400");
      });

      groupCard.classList.add("ring-2", "ring-blue-400");
    });
  });
}

function displayMembers(members) {
  members.forEach((member) => {
    let memberGroup = members.filter((member) => member.groupId === groups.id);
    memberstableBody.innerHTML = `<tr id= "${member.id}"
    username="${member.username}" data-id="${member.id}">
                  <td class="py-3 px-6">
                    <span
                      class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mr-3 align-middle"
                      >${member.name.match(/\b\w/g).join("")}</span
                    >
                    <span>${member.name}</span>
                  </td>

                  <td class="py-3 px-6 text-gray-500">
                    ${member.name}
                  </td>

                  <td id="member-alex-groups" class="py-3 px-6">
                    Weekend Trip, Apartment, Dinner Club
                  </td>

                  <td class="py-3 px-6">
                    <a
                      id="edit-member-alex"
                      data-action="edit"
                      data-member-id="alex"
                      href="#"
                      class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >Edit</a
                    >
                    <a
                      id="remove-member-alex"
                      data-action="remove"
                      data-member-id="alex"
                      href="#"
                      class="ml-4 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                      >Remove</a
                    >
                  </td>
                </tr>`;
  });
}

displayGroups(groups);
