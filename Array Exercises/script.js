let names= ["Daniel","Yaika","Luke","William","Kathryn","Taylor","Makenzie","Brenton","Max","Mike","Olivia","Rebecca","Daley","Tim","Ahmad","Chelsey","Faedra","Terrace","Kate","Zaire"]

let nickname = ["Danny","Yikes","Loki","Wild Bill","Kath","Tay","Kenzy","Smelly","Smallman","","Liv","Becca","","Tim","Ahms","","Mattox","T-Dawg","KMoMo",""]

let age = [31,30,28,29,51,25,27,30,100,19,26,29,25,27,29,29,43,31,27,29]

let hairColor = ["Brown","Black","Dark Blonde","Brown","Brown","Brown","Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black","Blonde","Brown","Brown","Amber ","Black"]

for(let i = 0; i<names.length;i++)
{
    console.log(names[i]);

}

function logPeople()
{
    shortBios= [];
    for (i=0; i < names.length; i++)
    {
        person = {firstName:names[i], nick:nickname[i],old:rage[i],
        hair:hairColor[i]};
        
    }
}
total = 0
count = 0
for(let j=0;<age.length;j++)
{
    count++
    total += age[j]
}
total=total/count
console.log(total)