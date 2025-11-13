# © 2024 Vlad-Stefan Harbuz <vlad@vlad.website>
# SPDX-License-Identifier: Apache-2.0

# This file is just used by Vlad to make staging deployments.

.PHONY: publish-staging

publish-staging:
	rsync -Pvrthl --delete --exclude .git --info=progress2 ./ yavin:/srv/www/cranberry-soss-staging
