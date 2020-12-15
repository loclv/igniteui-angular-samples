import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})

export class SEOService {
    private defaultTitle: string = 'Build Better Modern Web Experiences, Faster with Angular Components';
    private defaultDesc: string = 'Create feature-rich, progressive web apps with Ignite UI for Angular! A complete library for Angular native UI components, including the fastest Angular data grid and 60+ high-performance charts.'


    constructor(private title: Title, private meta: Meta) { }

    updateHeadProperties(title: string, desc: string, url: string){
        this.title.setTitle(title ?? this.defaultTitle)
        this.meta.updateTag({ name: 'description', content: desc ?? this.defaultDesc });
        this.meta.updateTag({property: "og:image", content: url})
        this.meta.updateTag({property: "og:site_name", content: "Infragistics"})
        this.meta.updateTag({property: "og:type", content: "object"})
        this.meta.updateTag({property: "og:title", content: title ?? this.defaultTitle})
        this.meta.updateTag({property: "og:url", content: url})
        this.meta.updateTag({property: "og:description", content: desc ?? this.defaultDesc})
    }
}
