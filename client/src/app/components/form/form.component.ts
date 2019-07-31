import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/user.model'
import { UsersService } from 'src/app/services/users.service'
import { ActivatedRoute } from '@angular/router'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  user: User = {
    names: null,
    surnames: null,
    identification: null,
    email: null,
    phone: null
  }

  id: any
  editing: boolean = false
  users: User[]

  public isError = false
  public error: any;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id']
    if (this.id) {
      this.editing = true
      this.userService.get().subscribe((data: User[]) =>{
        this.users = data
        this.user = this.users.find((u) => {
          return u.id == this.id
        })
      })
    } else {
      this.editing = false
    }
   }

  ngOnInit() {
  }

  /**
   * Save users
   * @param form users
   */
  saveUser(form: NgForm) {
    if (form.valid) {
      if (this.editing){
        this.userService.put(this.user).subscribe((data) => {
          alert('Usuario actualizado correctamente')
        }, (res) => {
          this.error = res;
          if (res.error.error ){
            alert(res.error.error)
          } else if(res.error.errors.email != null){
            alert(res.error.errors.email)
          } else if(res.error.errors.identification != null){
            alert(res.error.errors.identification)
          }
          this.isError = true
        })
      } else {
        this.userService.save(this.user).subscribe((data) => {
          alert('Usuario guardado correctamente')
        }, (res) => {
          this.error = res;
          if(res.error.identification != null){
            alert(res.error.identification)
          } else {
            alert(res.error.email)
          }
          this.isError = true
        })
      }
    } else {
      alert("Datos incorrectos, revisa los campos")
    }
  }
}
