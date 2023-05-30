import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../model/user.model';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  newUser: User = {
    nome: '',
    email: '',
    sexo: '',
    telefone: ''
  };

  constructor(private router: Router, private userService: UserService) { }

  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      () => {
        console.log('Usuário criado com sucesso');
        this.router.navigate(['/user-list']);
      },
      (error) => {
        console.log('Ocorreu um erro ao criar o usuário:', error);
      }
    );
  }
}
