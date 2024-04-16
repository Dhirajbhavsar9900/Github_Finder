
document.getElementById('searchForm').addEventListener('submit', function() {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the value of the input field (GitHub username)
    const username = document.getElementById('default-search').value.trim();
    // Check if the input field is empty
    if (username === '') {
        alert('Please enter a username.');
        return;
    }

    // Fetch user data from GitHub APi
    async function fetchUser(){
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        displayUserData(data);
        console.log(data);
    }
    fetchUser();
});

// Function to display user data on the webpage
function displayUserData(userData) {
    const userContainer = document.getElementById('user');
    // Create HTML content to display user data
    const html = `
    <div class="bg-white w-[70%] mt-16 h-[350px] rounded-xl flex items-start p-8">
    <img class="w-[60px] h-[60px] rounded-full mr-6" src="${userData.avatar_url}" alt="">
    <div class="flex flex-col">
        <h1 class="text-1xl font-bold mt-[1rem]">${userData.name}</h1>
        <div class="flex">
        </div>
    </div>
</div>

    `;
    userContainer.innerHTML = html;
}

