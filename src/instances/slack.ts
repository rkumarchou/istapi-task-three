import { WebClient, LogLevel } from '@slack/web-api'
import { logger } from '../utils/logger';

// WebClient insantiates a client that can call API methods
const client = new WebClient('xoxb-your-token', {
    // LogLevel can be imported and used to make debugging simpler
    logLevel: LogLevel.DEBUG
  });

export class SlackController {
    publishMessage = async (id: string, text: string) => {
        try {
          console.log('Token is', process.env.SLACK_TOKEN)
          await client .chat.postMessage({
            // The token you used to initialize your app
            token: 'xoxb-your-token', // This token needs to be a valid one
            channel: id,
            text
          });
          logger.info('Posted successfully to Slack Channel');
        }
        catch (error) {
            logger.info(`Error Posting Slack Channel : ${ error.message }`);
        }
      }
}