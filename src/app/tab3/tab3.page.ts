import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  agendado = [
    {
    servico : 'tosa',
    data : '12/12/2020'
  },
  {
    servico : 'banho',
    data : '08/12/2020'
  },
  {
    servico : 'vacina',
    data : '11/08/2020'
  },
  ];

  historico = [
    {
      servico : 'tosa',
      data : '02/06/2020'
    },
    {
      servico : 'banho',
      data : '08/07/2020'
    },
    {
      servico : 'vacina',
      data : '11/08/2020'
    },
  ];

  constructor() { }
  ngOnInit() { }

}

