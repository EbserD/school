import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

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
  dataSource: MatTableDataSource<Term>;
  displayedColumns: string[] = [
    'termID',
    'term',
    'categoryID',
    'lastchangedTimestamp',
  ];

  terms: Term[] = [
    {
      termID: 1,
      term: 'Routing',
      termDescription: 'Best Description',
      categoryID: 12,
      creatonTimestamp: new Date('2020-01-01T00:00:00Z'),
      lastchangedTimestamp: new Date('2020-01-01T00:00:00Z'),
    },
  ];
  caterories: Category[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.terms);
    // this.fetchTerms().subscribe((response) => {
    //   this.terms = response;
    // });
    // this.fetchCategories().subscribe((response) => {
    //   this.caterories = response;
    // });
  }

  fetchTerms() {
    return this.http.get<Term[]>('http://localhost:3000/terms/all');
  }

  fetchCategories() {
    return this.http.get<Category[]>('http://localhost:3000/categorie/all');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
