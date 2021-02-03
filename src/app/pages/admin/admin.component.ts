import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/interfaces/email.interface';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css', '../../../assets/css/bootstrap.css']
})
export class AdminComponent implements OnInit {

  emails: Email [] = [];
  collection = {count:0, data:[]};
  config:any;
  constructor(public fireSvc: FirestoreService) { }

  ngOnInit(): void {
    this.config = {
      itemsPerPage: 10,
      currentPage:1,
      totalItems: this.collection.count
    }
    this.fireSvc.getMensajes().subscribe(resp =>{
      this.collection.data = resp.map((e:any)=>{
        return{
          nombre: e.payload.doc.data().nombre,
          asunto:  e.payload.doc.data().asunto,
          mensaje:  e.payload.doc.data().mensaje
        }
        
      })
      console.log(this.collection.data)
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  
  
}
