import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  url: string = '';
  href : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  code(event: any) {
    this.url = event.target.value;
    console.log(this.url);
  }

  downloadqr(parent:any){
    const link = parent.elementRef.nativeElement.children[0].src;
    const blob = this.convertBase64ToBlob(link);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    a.click();

    }
    
    private convertBase64ToBlob(Base64Image: any) {
      const parts = Base64Image.split(';base64,');
      const imageType = parts[0].split(':')[1];
      const decodedData = window.atob(parts[1]);
      const uInt8Array = new Uint8Array(decodedData.length);
      for (let i = 0; i < decodedData.length; ++i) {
        uInt8Array[i] = decodedData.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: imageType });
    }

  }

 

