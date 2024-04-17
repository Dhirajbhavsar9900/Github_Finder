
document.getElementById('searchForm').addEventListener('submit', function() {
    // Prevent the default form submission behavior
    event.preventDefault();
    document.getElementById('preloader').style.display = 'block';
    
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
    <div id="container" class="bg-white shadow-2xl w-[100%] mt-16 h-[100%] rounded-xl items-start p-5 flex">
                <div class="flex flex-col mb-2 h-[100%] w-[40%] rounded-[20px] p-2 m-2 shadow-2xl">
                    <div class="flex w-[260px] h-[5rem] p-[5px] m-2 rounded-[20px] bg-gray-300 shadow-md"> 
                        <img class="w-[60px] h-[60px] rounded-full m-[5px] shadow-xl" src="${userData.avatar_url}" alt="">
                            <h1 class=" text-black text-1xl font-mono text-[18px] font-bold mt-[1.4rem] ml-[10px]">${userData.name}</h1> 
                    </div>
                    <div class="h-[20%] m-2 flex font-bold">
                        <div class="flex w-[130px] h-[3rem] p-[5px]  rounded-[20px] bg-gray-300 shadow-md"> 
                            <h2 class="self-center ml-2 text-[14px] ">Followers:   ${userData.followers} </h2>
                        </div>
                        <div class="flex w-[130px] h-[3rem] p-[5px] ml-1 rounded-[20px] bg-gray-300 shadow-md"> 
                            <h2 class="self-center text-[14px] ml-2">Following:   ${userData.following} </h2>
                        </div>
                    </div>
                    <div class="h-[20%] m-2 flex font-bold">
                        <div class="flex w-[130px] h-[3rem] p-[5px]  rounded-[20px] bg-gray-300 shadow-md"> 
                            <h2 class="self-center ml-2 text-[14px] ">Repo:  ${userData.public_repos}</h2>
                        </div>
                        <div class="flex w-[130px] h-[3rem] p-[5px] ml-1 rounded-[20px] bg-gray-300 shadow-md"> 
                            <h2 class="self-center text-[14px] ml-2">Gits:  ${userData.public_gists} </h2>
                        </div>
                    </div>
                    

                    
                    
                    
                    
            
                </div>
            
                <div class="h-[100%] w-[60%] p-2 rounded-[20px] m-3 shadow-2xl">
                    <div class=" w-[100%] flex m-2">
                        <div class="w-[50%] flex font-bold">
                            <div class="w-[60%] self-center h-[2rem]  rounded-[15px] flex">
                                <svg class="w-[15px] m-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>
                                <h2 class="self-center text-[12px]">Comapany:</h2>

                            </div>
                            <div class="self-center m-3 text-[12px]">
                                <h1>${userData.company}</h1>
                            </div>


                            <div class="w-[60%] self-center h-[2rem]  rounded-[15px] flex">
                                <svg class="w-[15px] m-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                                <h2 class="self-center text-[12px]">Location:</h2>

                            </div>
                            <div class="self-center m-3 text-[12px]">
                                <h1 class="text-[12px]">${userData.location}</h1>
                            </div>   
                        </div>
                    </div>
                    
                    <div class=" w-[100%] flex flex-col m-2">
                        <div class="w-[60%] flex font-bold">
                            <div class="w-[30%] self-center h-[2rem]  rounded-[15px]  flex">
                                <svg class=" w-[20px] m-[5px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                                <h2 class="self-center text-[12px]">Githun Link: </h2>

                            </div>
                            <div class="self-center m-3 text-[12px]">
                                <h1>${userData.repos_url}</h1>
                            </div>   
                        </div>
                    </div>
                </div>
               
                
                
                
               
            </div>
    `;
    userContainer.innerHTML = html;
    document.getElementById('preloader').style.display = 'none';

    // Show the user data container
    document.getElementById('user').style.display = 'block';

    let container = document.getElementById('container');

    if(userData.name == null || userData.name == undefined){
        alert('User Not Found');
        return;
    }
}

