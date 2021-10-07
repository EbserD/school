import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Term {
  termID: number;
  term: string;
  termDescription: string;
  categoryID: number;
  creatonTimestamp: Date;
  lastchangedTimestamp: Date;
}

interface Category {
  categoryID: number;
  categoryName: number;
}

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  terms: Term[];

  ngOnInit(): void {
    this.fetchTerms().subscribe;
  }

  fetchTerms() {
    return this.http.get<Term[]>('myurl/all');
  }
}
