#!/bin/bash
jmeter -n -t /jmetertest.jmx -Jhostname=$(printenv APP_HOST)
