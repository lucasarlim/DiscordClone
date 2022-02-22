import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messafesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messafesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messafesRef]);

  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Lucas Lima"
          date="23/02/2022"
          content="Estou finalizando o clone do Discord"
        />

        <ChannelMessage
          author="Diego Fernandes"
          date="23/02/2022"
          content={
            <>
              <Mention>@Lucas Lima</Mention>, gostei bastante do resultado !
            </>
          }
          hasMentions
        />

        <ChannelMessage
          author="Carlos Fernandes"
          date="23/02/2022"
          content="Ficou fantastico"
        />

        <ChannelMessage
          author="BCOIN"
          date="23/02/2022"
          content={
            <>
              Hi <Mention>@everyone</Mention>
              🔥 REWARD BUFF IMPLEMENTED 🔥 
              📌 We have implemented Buff Reward
              for users with different percentages based on %ROI. The specific
              details of the % Buff and Reward numbers in the chest are
              transparent as shown in the picture (both Treasure Mode and Story
              Mode). 
              📌 Reward adjustment roadmap: Every week we will measure
              and calculate numbers and offer appropriate reward adjustment
              plans to balance the game economy. And before any adjustment, we
              will notify users.
            </>
          }
          hasMentions
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem no #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
