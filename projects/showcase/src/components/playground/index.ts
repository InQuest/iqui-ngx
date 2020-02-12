import { Component, OnInit, Directive, Input, ContentChild, TemplateRef } from '@angular/core';

@Directive({
  selector: '[iquiShowcasePlayground]'
})
export class PlaygroundShowcaseDirective {
  constructor () {}
}

@Component({
  selector: 'iqui-showcase-playground',
  templateUrl: './index.html',
  styleUrls: ['./style.scss']
})
export class PlaygroundComponent implements OnInit {

  @Input()
  public name: string = null;

  @Input()
  public attributes: object = {};

  @Input()
  public templates: object = {};

  @Input()
  public content: string = null;

  @ContentChild(PlaygroundShowcaseDirective, { read: TemplateRef })
  public template: TemplateRef<PlaygroundShowcaseDirective>;

  public get attributeKeys () { return Object.keys(this.attributes); }
  public attributeValues = {};
  public get templateKeys () { return Object.keys(this.templates); }
  public templateValues = {};
  public contentValue = null;

  public ngOnInit () {
    // Initialize values
    this.attributeValues = this.attributeKeys.reduce((attributeValues, key) => {
      // tslint:disable-next-line: max-line-length
      attributeValues[key] = JSON.parse(JSON.stringify(this.attributes[key] instanceof Array ? this.attributes[key][0] : this.attributes[key]));
      return attributeValues;
    }, {});
    this.templateValues = this.templateKeys.reduce((templateValues, key) => {
      templateValues[key] = this.templates[key];
      return templateValues;
    }, {});
    this.contentValue = this.content;
  }

  public isAttributeArray (key) {
    return (this.attributes[key] instanceof Array);
  }
  public getAttributeType (key) {
    return (this.attributes[key] instanceof Array ? (typeof this.attributes[key][0]) : (typeof this.attributes[key]));
  }

  public selectAttributeValue (key, e) {
    this.attributeValues[key] = this.attributes[key].find(value => (value.toString() === e.target.value.toString()));
  }

}
