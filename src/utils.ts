/**
 * @fileoverview Utilities
 */

//Imports
import {EOL} from 'os';
import chalk from 'chalk';

/**
 * Center a message for printing
 * @param message Message to center
 * @param margin Margin size (in characters)
 * @param width Width to center for
 */
const center = (message: string, margin: number, width: number) =>
{
  //Compute the effective width
  const effectiveWidth = width - (2 * margin);

  let text = '';

  //No wrapping
  if (message.length <= effectiveWidth)
  {
    //Compute the padding
    const padding = (width - message.length) / 2;

    //Add the padding
    text = ' '.repeat(Math.floor(padding)) + message + ' '.repeat(Math.ceil(padding));
  }
  else
  {
    for (let i = 0; i < message.length; i += effectiveWidth)
    {
      //Get the line
      const line = message.substring(i, Math.min(i + effectiveWidth, message.length));

      //Full line
      if (line.length == effectiveWidth)
      {
        //Compute the padding
        const padding = (width - line.length) / 2;

        //Add the padding
        text += ' '.repeat(Math.floor(padding)) + line + ' '.repeat(Math.ceil(padding)) + EOL;
      }
      //Partial line
      else
      {
        //Compute the padding
        const padding = (width - line.length) / 2;

        //Add the padding
        text += ' '.repeat(Math.floor(padding)) + line + ' '.repeat(Math.ceil(padding));
      }
    }
  }

  return text;
};

/**
 * Print a banner
 * @param title Banner title
 * @param description Banner description
 */
export const banner = (title: string, description: string) =>
{
  //Get the terminal dimensions
  const width = process.stderr.columns;

  //Print
  console.error(chalk.bgRedBright(' '.repeat(width)));
  console.error(chalk.bgRedBright(' '.repeat(width)));
  console.error(chalk.bgRedBright.bold(center(title, 2, width)));
  console.error(chalk.bgRedBright(center(description, 2, width)));
  console.error(chalk.bgRedBright(' '.repeat(width)));
  console.error(chalk.bgRedBright(' '.repeat(width)));
};