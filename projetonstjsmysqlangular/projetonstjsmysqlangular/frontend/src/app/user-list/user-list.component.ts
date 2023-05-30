import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] | undefined;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.log('Ocorreu um erro ao carregar os usuários:', error);
      }
    );
  }
  navigateToCreateUser() {
    this.router.navigate(['/user-create']);
  }
  editUser(userId: number) {

    this.router.navigate([`/user-edit/${userId}`]);
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('Usuário excluído com sucesso');
        this.loadUsers();
      },
      (error) => {
        console.log('Ocorreu um erro ao excluir o usuário:', error);
      }
    );
  }
}

