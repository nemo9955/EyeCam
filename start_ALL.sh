#!/bin/bash

mate-terminal  --window  -t "TSC watcher"  -e "tsc  -w" --tab -t "HTTP Server" -e "python -m SimpleHTTPServer" --tab -t "Local"

exit 0
