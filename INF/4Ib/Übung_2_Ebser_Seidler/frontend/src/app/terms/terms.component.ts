import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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
  categoryName: string;
}

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Term>;
  displayedColumns: string[] = [
    'termID',
    'term',
    'categoryID',
    'lastchangedTimestamp',
  ];
  terms: Term[];
  // terms: Term[] = [
  //   {
  //     termID: 1,
  //     term: 'Routing',
  //     termDescription: 'Best Description',
  //     categoryID: 12,
  //     creatonTimestamp: new Date('2020-01-01T00:00:00Z'),
  //     lastchangedTimestamp: new Date('2020-01-01T00:00:00Z'),
  //   },
  // ];
  caterories: Category[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTerms().subscribe((response) => {
      this.terms = response;
      this.dataSource = new MatTableDataSource(this.terms);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this.fetchCategories().subscribe((response) => {
      this.caterories = response;
    });
  }

  ngAfterViewInit() {}

  fetchTerms() {
    return this.http.get<Term[]>('http://localhost:3000/terms/all');
  }

  fetchCategories() {
    return this.http.get<Category[]>('http://localhost:3000/category/all');
  }

  getCategoryName(id: number): string {
    if (!this.caterories) return 'No Categiries';
    const matchingCategory = this.caterories.find((c) => c.categoryID === id);
    return matchingCategory
      ? matchingCategory.categoryName
      : 'No matching Category';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
