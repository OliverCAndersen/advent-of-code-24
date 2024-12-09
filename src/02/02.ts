import { readFileSync } from 'fs';

function validateReport(levels: number[]) : boolean
{
	var isIncreasing: boolean | null = null;
	for (let i = 0; i < levels.length - 1; ++i)
	{
		let curr: number = levels[i];
		let next: number = levels[i + 1];
		if (isIncreasing == null)
		{
			isIncreasing = (next > curr);
		}
		else if ((isIncreasing == true && next <= curr) || (isIncreasing == false && curr <= next))
		{
			return false;
			break;
		}
		let diff = Math.abs(curr - next);
		if (diff == 0 || diff > 3)
		{
			return false;
			break;
		}
	}
	return true;
}

export function run02A() : void
{
    console.log('Running 02A')

    const fileContent = readFileSync('./input/02/input.txt', 'utf-8')

    var sum : number = 0
	var leftNumbers: number[] = [];
	var rightNumbers: number[] = [];

    fileContent.split(/\r?\n/).forEach(line =>  {
		var regexMatch : RegExpMatchArray | null = line.match(/\d+/g)
		var levels: number[] = [];
        if (regexMatch != null)
        {
            for (var group of regexMatch)
			{
				levels.push(+group);
			}
        }

		if (validateReport(levels))
			++sum;
    });

    console.log("Sum: " + sum)
}

export function run02B() : void
{
    console.log('Running 02B')

    const fileContent = readFileSync('./input/02/input.txt', 'utf-8')

    var sum : number = 0
	var leftNumbers: number[] = [];
	var rightNumbers: number[] = [];

    fileContent.split(/\r?\n/).forEach(line =>  {
		var regexMatch : RegExpMatchArray | null = line.match(/\d+/g)
		var levels: number[] = [];
        if (regexMatch != null)
        {
            for (var group of regexMatch)
			{
				levels.push(+group);
			}
        }

		if (validateReport(levels))
		{
			++sum;
		}
		else
		{			
			for (let i = 0; i < levels.length; ++i)
			{
				let newLevels = levels.slice();
				newLevels.splice(i, 1);
				if (validateReport(newLevels))
				{
					++sum;
					break;
				}
			}
		}
    });

    console.log("Sum: " + sum)
}