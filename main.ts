//Task: 30, Hello admin: Make an arrayof five or more user names, including the name "admin". imagine you are 
//writing code that will print a greeting to each user after they log in to a website. Loop through the array 
//and print a greeting to each user:
// 1) if the user name is 'admin',print a special greeting , such as hello admin, would you like to 
//see a status report?
// 2) Otherwise print a generic greeting, such as Hello eric, thankyou for logging again.

let userNames:string[]= ["Admin","Eric","Hadi","Osama","Rabia"];
for(let i=0; i<userNames.length; i++)
    if (userNames[i] === "Admin")
{console.log("Hello admin, would you like to see s status report ?")}
else {
    console.log(`Hello ${userNames[i]}, Thank you for Logging again`)
}
