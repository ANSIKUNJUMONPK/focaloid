

class person {
    combined=[]
    constructor(...obj) {
       for ( let i of obj){
            var o=JSON.parse(i)
           this.combined=this.combined.concat(o)
       }
    }

    eighteenFn() {
        console.log("users with age >18")
        var filter=this.combined.filter(f=>{var today = new Date();
                var birthDate = new Date(f.DOB);
                var age = today.getFullYear() - birthDate.getFullYear();
               return age>18
                })
              
                for(let i of filter){
                    console.log(i.user_name)
                }
        
    }
    sortFn() {
        var sort = this.combined.sort(function (a, b) {

            return new Date(a.DOB) - new Date(b.DOB);
        });
        console.log("SORTED ARRAY")
    console.log(sort);

    }
}
let males = [{ "name": "Jishnu", "last_name": "Vishwanath", "user_name": "neolivz", "DOB": "20-JAN-1984", "Place": "Thodupuzha" }, { "name": "Binoy", "last_name": "John", "user_name": "carnage", "DOB": "07-APR-1997", "Place": "Ernakulam" }, { "name": "Graph", "last_name": "Overflow", "user_name": "graphOverflow", "DOB": "16-DEC-1993", "Place": "Ernakulam" }, { "name": "Shiniyas", "last_name": "Khan", "user_name": "shan", "DOB": "17-NOV-2001", "Place": "Ernakulam" }];
//console.log(males)
let females = [{ "name": "Gauri", "last_name": "Kumar", "user_name": "lilwolf", "DOB": "18-AUG-1994", "Place": "Alappuzha" }, { "name": "Smita", "last_name": "Sen", "user_name": "roho", "DOB": "02-JAN-2000", "Place": "Ernakulam" }];
//console.log(females)
let females2 = [{"name":"Smita","last_name":"Sen","user_name":"roho","DOB":"02-JAN-2000","Place":"Ernakulam"}];

let m=JSON.stringify(males)
let f= JSON.stringify(females)
let obj = new person(m, f);



obj.eighteenFn();
obj.sortFn();

