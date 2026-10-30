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
  displayModals();
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

  let groupMembers = members.filter((member) =>
    member.groups.includes(groupID),
  );

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

      let member = members.find((member) => member.id === deleteMemberID);

      member.groups = member.groups.filter((id) => id !== groupID);

      if (member.groups.length === 0) {
        members = members.filter((member) => member.id !== deleteMemberID);
      }

      let updatedCount = members.filter((member) =>
        member.groups.includes(groupID),
      ).length;

      let groupCard = groupsList.querySelector(`[data-id="${groupID}"]`);

      groupCard.querySelector("[data-member-count]").textContent =
        `${updatedCount} members`;

      displayMembers(groupID);
    });
  });
}

function editMember(groupID) {}

function displayModals() {
  let groupCheckboxes = groups
    .map(
      (group) => `
      <label
        for="member-group-${group.id}"
        class="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 cursor-pointer transition-colors hover:border-blue-300 hover:bg-blue-50"
      >
        <input
          type="checkbox"
          id="member-group-${group.id}"
          name="groups"
          value="${group.id}"
          class="h-4 w-4 accent-blue-600"
        />

        <span class="font-medium">${group.name}</span>
      </label>
    `,
    )
    .join("");

  formsSection.innerHTML = "";

  formsSection.innerHTML = `<article
              class="h-full flex-1 min-w-0 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col overflow-hidden p-6 gap-2"
            >
              <div>
                <h3
                  id="create-group-heading"
                  class="font-semibold text-lg mb-6"
                >
                  Create group
                </h3>
              </div>

              <form id="create-group-form" class="space-y-4">
                <!-- Group name -->
                <div class="flex flex-col gap-2">
                  <label
                    for="group-name"
                    class="text-xs font-medium text-gray-800"
                  >
                    Group name
                  </label>

                  <input
                    type="text"
                    id="group-name"
                    name="name"
                    placeholder="e.g. Summer vacation"
                    required
                    class="w-full h-10 border border-gray-300 rounded-md bg-white px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  />
                </div>

                <!-- Description -->
                <div class="flex flex-col gap-2">
                  <label
                    for="group-description"
                    class="text-xs font-medium text-gray-800"
                  >
                    Description
                  </label>

                  <textarea
                    id="group-description"
                    name="description"
                    placeholder="Describe your group..."
                    rows="3"
                    required
                    class="w-full border border-gray-300 rounded-md bg-white px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  ></textarea>
                </div>

                <!-- Currency -->
                <div class="flex flex-col gap-2">
                  <label
                    for="group-currency"
                    class="text-xs font-medium text-gray-800"
                  >
                    Currency
                  </label>

                  <select
                    id="group-currency"
                    name="currency"
                    required
                    class="w-full h-10 border border-gray-300 rounded-md bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  >
                    <option value="" disabled selected>Select currency</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="MAD">MAD (.د.م)</option>
                  </select>
                </div>

                <!-- Start date -->
                <div class="flex flex-col gap-2">
                  <label
                    for="group-start-date"
                    class="text-xs font-medium text-gray-800"
                  >
                    Start date
                  </label>

                  <input
                    type="date"
                    id="group-start-date"
                    name="startDate"
                    required
                    class="w-full h-10 border border-gray-300 rounded-md bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                  />
                </div>

                <p class="text-xs text-gray-500">
                  You can add members after creating the group.
                </p>

                <!-- Buttons -->
                <div class="flex items-center gap-2 pt-1">
                  <button
                    id="create-group-submit"
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    Create Group
                  </button>

                  <button
                    id="create-group-cancel"
                    type="button"
                    class="border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-sm font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </article>

            <!-- Add / Edit Member -->
            <article
              class="flex-1 min-w-0 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-6"
            >
              <div>
                <h3 id="member-form-heading" class="font-semibold text-lg mb-6">
                  Add / edit member
                </h3>
              </div>

              <form id="member-form">
                <!-- Full name and username -->
                <div class="flex gap-4 mb-4">
                  <div class="flex flex-col flex-1 min-w-0 gap-2">
                    <label
                      for="member-name"
                      class="text-xs font-medium text-gray-800"
                    >
                      Full name
                    </label>

                    <input
                      type="text"
                      id="member-name"
                      name="name"
                      placeholder="Enter full name"
                      required
                      class="w-full h-10 border border-gray-300 rounded-md bg-white px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                    />
                  </div>

                  <div class="flex flex-col flex-1 min-w-0 gap-2">
                    <label
                      for="member-username"
                      class="text-xs font-medium text-gray-800"
                    >
                      Username
                    </label>

                    <input
                      type="text"
                      id="member-username"
                      name="username"
                      placeholder="e.g. alex"
                      required
                      class="w-full h-10 border border-gray-300 rounded-md bg-white px-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                    />
                  </div>
                </div>

                  <!-- Groups -->
                  <div class="flex flex-col gap-3 mb-4">
                    <div>
                      <label class="text-xs font-medium text-gray-800">
                        Groups
                      </label>

                      <p class="text-xs text-gray-500 mt-1">
                        Select one or more groups for this member.
                      </p>
                    </div>

                    <div
                      id="member-groups-list"
                      class="mx-auto grid w-full max-w-2xl grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                      ${groupCheckboxes}
                    </div>
                  </div>

                <p class="text-xs text-gray-500 mb-4">
                  Select the group this member belongs to.
                </p>

                <!-- Buttons -->
                <div class="flex items-center gap-2">
                  <button
                    id="save-member-button"
                    type="submit"
                    class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    Save Member
                  </button>

                  <button
                    id="cancel-member-button"
                    type="button"
                    class="border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 text-sm font-medium px-4 py-2 rounded-md transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </article>`;
}

displayGroups(groups);
scrollIntoForm();
searchInput();
