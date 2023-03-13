import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "duration",
    pure: true
})
export class DurationPipe implements PipeTransform {

    transform(duration: string): string {
        if (!duration) {
            return "00:00";
        }

        const hours = Math.floor(parseInt(duration) / 60);
        const minutes = parseInt(duration) % 60;
        const hoursString = hours.toString().padStart(2, "0");
        const minutesString = minutes.toString().padStart(2, "0");
        return `${hoursString}:${minutesString}`;
    }

}
