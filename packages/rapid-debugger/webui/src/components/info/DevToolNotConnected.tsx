import tw from '../../utils/tailwind';
import { Pressable, Text } from 'react-native';

export default function DevToolNotConnected() {
  return (
    <>
      {!window.location.href.includes("?devServer=") && !window.location.href.includes("_expo/plugins") && (
        <div>
          <div style={tw`border border-black border-dotted m-4 p-4 bg-amber-200 text-center`}>
            Your devTool is not connected with an expo app go to {" "}
            <Pressable
              onPress={() => {
                window.location.href =
                  window.location.href + '?devServer=localhost:8081';
              }}
            >
              <span style={tw`text-green-500`}>
                {`${window.location.href}?devServer=localhost:8081`} (replace 8081 with your expo app port)
              </span>
            </Pressable>
          </div>
        </div>
      )}
    </>
  )
}