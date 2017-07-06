#!/bin/bash
jmeter -n -t /jmetertest.jmx -Jhostname=$(printenv APP_HOST) -Jport=$(printenv APP_PORT) -Jusers=$(printenv TEST_USERS) -Jrampup=$(printenv TEST_RAMPUP)
