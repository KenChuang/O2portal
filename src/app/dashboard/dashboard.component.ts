import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SystemSummary {
  totalNodes?: number;
  usedNodes?: number;
  ocloudCount?: number;
  nfCount?: number;
  cpuUtilized?: number;
  interfaceUtilized?: number;
}
export interface OcloudSummary {
  id: string;
  name: string;
  dmsCount: number,
  nfCount: number,
  faultCount: number,
  ocloudSummary?: OcloudSummary
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /* local file */
  isLocal = true;

  systemSummary: SystemSummary = {};
  ocloudSummary: OcloudSummary[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // System Summary
    this.getSystemSummary();
    // Ocloud Summary
    this.getOcloudSummary();
  }

  getSystemSummary() {
    if (this.isLocal) {
      /* local file test */
      this.systemSummary = systemSummary();

    } else {
      const url = 'http://211.20.94.210:8080/querySystemSummary';
      this.http.get(url).subscribe(
        res => {
          console.log('getSystemSummary:');
          console.log(res);
          this.systemSummary = res;
        }
      );
    }
  }

  getOcloudSummary() {
    if (this.isLocal) {
      /* local file test */
      this.ocloudSummary = ocloudSummary();
      this.ocloudSummary.forEach((row) => {
        row.ocloudSummary = row;
      });
    } else {
      const url = 'http://211.20.94.210:8080/queryOcloudSummary';
      this.http.get(url).subscribe(
        res => {
          console.log('getOcloudSummary:');
          console.log(res);
        }
      );
    }
  }

  veiw(ocloudSummary: OcloudSummary) {
    console.log(ocloudSummary);
  }

}

function systemSummary() {
  return {
    "totalNodes": 20,
    "usedNodes": 18,
    "ocloudCount": 2,
    "nfCount": 10,
    "cpuUtilized": 30,
    "interfaceUtilized": 18
  }
}

function ocloudSummary() {
  return [
    {
      id: "cloud000-0000-0000-0000-000000000000",
      name: "cloud1",
      dmsCount: 1,
      nfCount: 2,
      faultCount: 12
    },
    {
      id: "cloud000-0000-0000-0000-000000000000",
      name: "cloud2",
      dmsCount: 1,
      nfCount: 2,
      faultCount: 12
    },
  ]
}
