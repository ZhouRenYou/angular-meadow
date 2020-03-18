import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PassportService {
  constructor(private http: HttpClient) {}
  /** 用户登录 */
  login(params: { userName: string; password: string }): Observable<any> {
    return this.http.post("/api/login?_allow_anonymous=true", { params });
  }
}
