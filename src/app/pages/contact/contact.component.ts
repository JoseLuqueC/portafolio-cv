import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2'
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../../assets/css/bootstrap.css']
})
export class ContactComponent implements OnInit {
 
  contactForm = this.fb.group({
    nombre: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    mensaje: new FormControl('', Validators.required)
    });
  constructor(public fireSvc: FirestoreService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  send(){
    this.fireSvc.setMensaje(this.contactForm.value);
      this.contactForm.reset();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Mensaje enviado'
      })
    
    
  }
}
