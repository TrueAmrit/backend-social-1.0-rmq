import { PlatformEvents } from 'src/enums/platformEvents';

export class RMQPayloadDto {
  event?: PlatformEvents;
  payload: any;
  additionalInfo?: any;
}
