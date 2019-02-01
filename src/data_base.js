import { normalize } from "path";
import "@babel/polyfill";
let db;
const dbName = "QuizDatabase";
const storeName = "Questions";
let version = 1;
export function openDb() {
    let openRequest = indexedDB.open(dbName, version);

    openRequest.onsuccess = function (event) {
        db = event.target.result;

        compliteFunction();
    };
    openRequest.onerror = function (event) {
        errorFunction(event);
    };


    openRequest.onupgradeneeded = function (event) {
        const thisDb = event.target.result;
        const store = thisDb.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        store.createIndex("title", "title", { unique: false });
        store.createIndex("question", "question", { unique: false });
        store.createIndex("type", "type", { unique: false });
      
    }

}
let transaction;
const transactionFunction = () => {
    if (db == undefined) {
        console.log("wait");
    }
    else {
       
            transaction = db.transaction(storeName, "readwrite")
    }
};
let store;
const storeFunction = () => {
    if (db == undefined) {
        console.log("wait");
    }
    else {
            store = transaction.objectStore(storeName)
    }
}
let newQuestion = { title:"", question: "", type: ""};

export function addQuestionToDB(title, question, type) {
    newQuestion.title = `${title}`;
    newQuestion.question = `${question}`;
      newQuestion.type = `${type}`;
    transactionFunction();
    storeFunction();

    transaction.oncomplete = function (event) {
        compliteFunction();
    };

    transaction.onerror = function (event) {
        errorFunction(event);
    };

    const request = store.add(newQuestion);
    request.onsuccess = function (event) {
        compliteFunction();
        alert("Question sucesfully added!")
    }
    request.onerror = function (event) {
        errorFunction(event);
    }
}

export function* getQuestionsList(ChosenType){
    transactionFunction();
    storeFunction();
console.log(ChosenType)
    let questions = [];
    let cursor
store.openCursor().onsuccess = function(event) {
  cursor = event.target.result;
  if (cursor) {
    if(cursor.value.type == ChosenType || ChosenType == "ALL"){
        questions.push(cursor.value)
    }
    cursor.continue();
  }
  else {
    console.log("Got all questions ");
  }

};
yield
return questions
}
export function delQuestionFromDB(questionId) {
    transactionFunction();
    storeFunction();
    console.log(store)
console.log(questionId)
   const request = store.delete(questionId)
   request.onsuccess = ()=>{
    compliteFunction();
    alert("Question sucesfully deleted!")
    console.log(store)
   }

}
export function editContent(toEdit, title, question, type ) {
    transactionFunction();
    storeFunction();
    let editElement;
console.log(title)
    const index = store.index("title");
    console.log(index)
    index.get(`${toEdit}`).onsuccess = function (event) {
        editElement = event.target.result;
        console.log(editElement)
       editElement.title = title
    editElement.question = question;
    editElement.type = type;
          
        const request = store.put(editElement)
        request.onsuccess = function (event) {
            compliteFunction();
            alert("Question sucesfully edited!")
        };
        request.onerror = function (event) {
            errorFunction(event);
        }
    }
    index.get(`${toEdit}`).onerror = function (event) {
        errorFunction(event);
    }

}
let getElement = {question:"wait",
type: "no",
id: 0}

export function* getQuestion(questionId) {
    transactionFunction();
    storeFunction();
console.log(questionId)
store.get(questionId).onsuccess = function (event) {
   getElement = event.target.result
   console.log(getElement)
    
 }
  
store.get(questionId).onerror = function (event) {
   errorFunction(event);
}
 yield
 return getElement
}



export function* dbLength(ChosenType){
    let id = []
    let cursor
    transactionFunction();
    storeFunction();
    store.openCursor().onsuccess = function(event) {
        cursor = event.target.result;
        console.log(cursor)
        if (cursor) {
            if(cursor.value.type == ChosenType || ChosenType == "ALL"){
              id.push(cursor.key)}

          cursor.continue();
        }
        else {
          console.log("Got all Ids"+ id);
        }
    }
  yield
return id;
    
}

const errorFunction = (event) => {
    console.log(`Error ${event.errorCode}`)
}
const compliteFunction = () => {
    console.log("Everything is fine. All done!")
}