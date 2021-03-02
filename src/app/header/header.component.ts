import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isMenuCollapsed = true;
  CloseResult = '';
  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  Open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})}

 
}