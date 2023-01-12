import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RMQPayloadDto } from '../../dtos/rmqPayload.dto';
import { RmqTopics } from '../../enums/rmqTopics';

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
