import { readFileSync } from 'fs';

export function run01A() : void
{
    console.log('Running 01A')

    const fileContent = readFileSync('./input/01/input.txt', 'utf-8')

    var sum : number = 0
	var leftNumbers: number[] = [];
	var rightNumbers: number[] = [];

    fileContent.split(/\r?\n/).forEach(line =>  {
		var regexMatch : RegExpMatchArray | null = line.match(/\d+/g)
        if (regexMatch != null)
        {
            leftNumbers.push(+regexMatch[0]);
			rightNumbers.push(+regexMatch[1]);
        }
    });

	leftNumbers.sort();
	rightNumbers.sort();

	for (var i = 0; i < leftNumbers.length; ++i)
	{
		var diff: number = Math.abs(leftNumbers[i] - rightNumbers[i]);
		sum += diff;
	}

    console.log("Sum: " + sum)
}

export function run01B() : void
{
    console.log('Running 01B')

    const fileContent = readFileSync('./input/01/input.txt', 'utf-8')

    var sum : number = 0
	var leftNumbers: number[] = [];
	var rightNumbers: number[] = [];

    fileContent.split(/\r?\n/).forEach(line =>  {
		var regexMatch : RegExpMatchArray | null = line.match(/\d+/g)
        if (regexMatch != null)
        {
            leftNumbers.push(+regexMatch[0]);
			rightNumbers.push(+regexMatch[1]);
        }
    });

	for (let i = 0; i < leftNumbers.length; ++i)
	{
		var occurenceCount: number = rightNumbers.filter(x => x == leftNumbers[i]).length;
		sum += leftNumbers[i] * occurenceCount;
	}

    console.log("Sum: " + sum)
}