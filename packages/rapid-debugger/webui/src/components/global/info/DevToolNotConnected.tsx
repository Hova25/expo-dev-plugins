export default function DevToolNotConnected() {
  return (
    <>
      {!window.location.href.includes('?devServer=') &&
        !window.location.href.includes('_expo/plugins') && (
          <div>
            <div className="border border-accent border-dotted m-4 p-4 bg-secondary text-center">
              Your devTool is not connected with an expo app go to{' '}
              <span
                onClick={() => {
                  window.location.href =
                    window.location.href + '?devServer=localhost:8081';
                }}
                className="cursor-pointer"
              >
                <span className="text-primary">
                  {`${window.location.href}?devServer=localhost:8081`}
                </span>{' '}
                (replace 8081 with your expo app port)
              </span>
            </div>
          </div>
        )}
    </>
  );
}
