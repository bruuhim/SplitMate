let groupsCounter = document.getElementById("groups-title");
let groupsList = document.getElementById("groups-list");
let memberstableBody = document.getElementById("members-table-body");
let openCreateGroupButton = document.getElementById("open-create-group-button");
let createGroupHeading = document.getElementById("create-group-heading");
let addMemberButton = document.getElementById("add-member-button");
let memberFormHeading = document.getElementById("member-form-heading");
let searchBox = document.getElementById("search-box");
let membersSection = document.getElementById("members-section");
let formsSection = document.getElementById("forms-section");

// i add a smooth scrolling to form cards
function scrollIntoForm() {
  formsSection.classList.add("hidden");

  openCreateGroupButton.addEventListener("click", () => {
    formsSection.classList.remove("hidden");

    createGroupHeading.scrollIntoView({ behavior: "smooth" });
  });
  addMemberButton.addEventListener("click", () => {
    formsSection.classList.remove("hidden");

    memberFormHeading.scrollIntoView({ behavior: "smooth" });
  });
}

// i add groups from groups array object to html using innerhtml
function displayGroups(groups) {
  groupsCounter.textContent = `Your groups (${groups.length})`;
  groupsList.innerHTML = "";

  groups.forEach((group) => {
    let memberCount = members.filter((member) =>
      member.groups.includes(group.id),
    ).length;

    groupsList.innerHTML += `
  <div
    id="${group.id}"
    data-id="${group.id}"
    data-name="${group.name}"
    class="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
  >
    <div class="flex items-center gap-3">
      <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
        <img
          src="assets/icon/Folder.svg"
          alt="Folder Icon"
          class="h-6 w-6"
        />
      </div>

      <div class="min-w-0">
        <h3 class="font-semibold text-slate-900">
          ${group.name}
        </h3>
        <p data-member-count class="mt-1 text-sm text-slate-500">
          ${memberCount} members
        </p>
      </div>
    </div>

    <p class="mt-5 min-h-10 text-sm leading-5 text-slate-600">
      ${group.description}
    </p>

    <div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
      <span class="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
        ${group.currency}
      </span>

      <span class="text-xs text-slate-500">
        Started ${group.startDate}
      </span>
    </div>
  </div>`;
  });

  membersSection.classList.add("hidden");

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

      displayMembers(Number(groupCard.dataset.id));
    });
  });
}

function displayMembers(groupID) {
  memberstableBody.innerHTML = "";

  let groupMembers = members.filter((member) => member.groupId === groupID);

  membersSection.classList.remove("hidden");

  groupMembers.forEach((member) => {
    let currentGroup = groups.find((group) => group.id === groupID);

    memberstableBody.innerHTML += `<tr id= "${member.id}"
    username="${member.username}" data-id="${member.id}">
                  <td class="py-3 px-6">
                    <span
                      class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-semibold mr-3 align-middle"
                      >${member.name.match(/\b\w/g).join("")}</span
                    >
                    <span>${member.name}</span>
                  </td>

                  <td class="py-3 px-6 text-gray-500">
                    ${member.username}
                  </td>

                  <td class="py-3 px-6">
                    ${currentGroup.name}
                  </td>

                  <td class="py-3 px-6">

                  <button
                    type="button"
                    data-action="edit"
                    data-member-id="${member.id}"
                    class="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    data-action="remove"
                    data-member-id="${member.id}"
                    class="ml-4 text-sm font-medium text-red-600 hover:text-red-800 transition-colors"
                  >
                    Remove
                  </button>
                </td>
                </tr>`;
  });

  deleteMember(groupID);
}

function searchInput() {
  searchBox.addEventListener("input", function () {
    let searchValue = searchBox.value.toLowerCase();

    let filteredGroups = groups.filter(
      (group) =>
        group.name.toLowerCase().includes(searchValue) ||
        group.description.toLowerCase().includes(searchValue),
    );

    displayGroups(filteredGroups);
  });
}

function deleteMember(groupID) {
  let deleteMemberBtns = memberstableBody.querySelectorAll(
    '[data-action="remove"]',
  );

  deleteMemberBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let deleteMemberID = Number(btn.dataset.memberId);

      members = members.filter((member) => member.id !== deleteMemberID);

      let updatedCount = members.filter(
        (member) => member.groupId === groupID,
      ).length;

      let groupCard = groupsList.querySelector(`[data-id="${groupID}"]`);

      groupCard.querySelector("[data-member-count]").textContent =
        `${updatedCount} members`;

      displayMembers(groupID);
    });
  });
}
displayGroups(groups);
scrollIntoForm();
searchInput();
