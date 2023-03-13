import { Injectable } from '@angular/core';
import { UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouterUtilsService {

    createUrlTree(commands: any[], queryParams?: { [key: string]: any }, fragment?: string): UrlTree {
        const urlSegments = commands.map(c => new UrlSegment(c.toString(), {}));
        const urlSegmentGroup = new UrlSegmentGroup(urlSegments, {});
        const tree = new UrlTree([urlSegmentGroup], queryParams, fragment);
        return tree;
    }

    getPrimaryOutletRoute(segmentGroup: UrlSegmentGroup): string {
        const segment = segmentGroup.segments.find(s => s.outlet === PRIMARY_OUTLET);
        return segment ? segment.path : '';
    }

}