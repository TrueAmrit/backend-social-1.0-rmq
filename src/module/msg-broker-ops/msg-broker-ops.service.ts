import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RMQPayloadDto } from 'src/dtos/rmqPayload.dto';
import { RmqTopics } from 'src/enums/rmqTopics';

@Injectable()
export class MsgBrokerService {
  emitToQueue(payload: RMQPayloadDto, topic: RmqTopics, client: ClientProxy) {
    try {
      const messageUser = client.emit(topic, {
        payload: payload,
      });
      return messageUser;
    } catch (err) {
      console.log(err);
    }
  }
}
