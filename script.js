document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('default-search').value.trim();

    if (username === '') {
        alert('Please enter a username.');
        return;
    }

    const userData = await fetchUserData(username);

    if (!userData) {
        alert('User not found.');
        return;
    }

    displayUserData(userData);
});

async function fetchUserData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

function displayUserData(userData) {
    const userContainer = document.getElementById('user');
    userContainer.innerHTML = `
        <div class="bg-white w-[70%] self-center mt-16 h-[350px] rounded-xl">
            <h2>${userData.name}</h2>
            <p>${userData.bio}</p>
            <p>Followers: ${userData.followers}</p>
            <p>Following: ${userData.following}</p>
            <p>Public Repos: ${userData.public_repos}</p>
        </div>
    `;
}
