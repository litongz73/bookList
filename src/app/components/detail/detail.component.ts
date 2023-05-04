import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  current: { name: string; description: string } | null = null;
  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.get().subscribe((data) => {
      this.current = structuredClone(data);
    });
  }
}
