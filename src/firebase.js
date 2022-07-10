import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import CryptoJS from "crypto-js"

const firebaseConfig = {
    apiKey: "AIzaSyBjafmZ8fcjEhLhOTyf0UeenhcNbVMS4FQ",
    authDomain: "movie-checker-fd97a.firebaseapp.com",
    projectId: "movie-checker-fd97a",
    storageBucket: "movie-checker-fd97a.appspot.com",
    messagingSenderId: "222674375310",
    appId: "1:222674375310:web:b101f3eb4bf3cf940dafdf"
}

const connection = initializeApp(firebaseConfig)
const db = getFirestore(connection)

const storage = getStorage(connection)

export async function uploadPhoto(file, path) {
    const fileRef = ref(storage, path)
    const snapshot = await uploadBytes(fileRef, file)
    const url = await getDownloadURL(snapshot.ref)
    return url
}

export async function addNewUser(user) {
    try {
        await addDoc(collection(db, "users"), {
            login: user.login,
            password: CryptoJS.AES.encrypt(user.password, user.login).toString()
        })
        return true
    } catch (e) {
        console.error("Error adding user: ", e)
        return false
    }
}

export async function checkUser(user) {
    try {
        const usersSnapshot = await getDocs(collection(db, "users"))
        const allUsers = usersSnapshot.docs.map(doc => doc.data())
        const neededUser = allUsers.find((us) => us.login === user.login)
        
        if (!neededUser) return false
        
        const pass = CryptoJS.AES.decrypt(neededUser.password, user.login).toString(CryptoJS.enc.Utf8)
        if ( pass === user.password) return true
        
        return false
    } catch (e) {
        console.log(e)
        return false
    }
}

export async function getFilms() {
    try {
        const filmsSnapshot = await getDocs(collection(db, "films"))
        return filmsSnapshot.docs.map(film => {
            return {...film.data(), id: film.id}
        })
    } catch(e) {
        console.log(e)
        return []
    }
}

export async function createFilm(film) {
    try {
        const docRef = await addDoc(collection(db, "films"), film)
        return true
    } catch (e) {
        console.error("Error adding film: ", e)
    }
}

export async function deleteFilm(film) {
    try {
        const filmRef = doc(db, "films", film.id)
        await deleteDoc(filmRef)
        return true
    } catch (e) {
        console.error("Error deleting film: ", e)
        return false
    }
}

export async function changeStateFilm(film, newState) {
    try {
        const filmRef = doc(db, "films", film.id)
        await updateDoc(filmRef, {
            state: newState
        })
        return true
    } catch (e) {
        console.error("Error changing state: ", e)
        return false
    }
}