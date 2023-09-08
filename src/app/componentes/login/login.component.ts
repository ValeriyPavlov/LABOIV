import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private router: Router){};

  public user: string = "";
  public password: string = "";

  // FALTA IMPLEMENTAR VALIDACIONES Y AUTOGENERADORE DE IDS.
  public registrarse()
  {
    const loginRef = doc(db, 'login', Date.now().toString());
    setDoc(loginRef, {user: this.user, password: this.password});
  }

  public logear = async () => 
  {
    const docRef = await getDocs(collection(db, "login"));
    var bandera = false;
    try 
    {
      docRef.forEach((doc) => {
        if (doc.get("user") == this.user && doc.get("password") == this.password)
        {
          bandera = true;
        }
      });
      if (bandera != false)
      {
        this.router.navigateByUrl("/bienvenido");
      }
      else
      {
        this.router.navigateByUrl("/error");
      }
    }
    catch (err) 
    {
      console.log(err);
    }

  }
}

const firebaseConfig = {
  apiKey: "AIzaSyBkpx5MnuCHme3MYtKkwweLo5wwmUfCU8s",
  authDomain: "testlabo4.firebaseapp.com",
  projectId: "testlabo4",
  storageBucket: "testlabo4.appspot.com",
  messagingSenderId: "1015766250721",
  appId: "1:1015766250721:web:3285f2cb0796ddf7adf3a0"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);