import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/services/users.service'
import { User } from 'src/app/models/user.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[]

  constructor(private usersService: UsersService) {
    this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.usersService.get().subscribe((data: User[])=>{
      this.users = data
    }, (error)=> {
      console.log(error)
      alert("Ocurrió un error")
    })
  }

  delete(id) {
    if (confirm('¿Estas seguro de eliminar este usuario?')) {
      this.usersService.delete(id).subscribe((data)=>{
        alert('Usuario eliminado exitosamente')
        console.log(data)
        this.getUsers();
      }, (error) => {
        console.log(error)
      })
    }
  }

}
