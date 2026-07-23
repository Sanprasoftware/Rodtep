from pathlib import Path

from setuptools import find_packages, setup

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# Read the version without importing the app during a PEP 517 build.
about = {}
exec(
	(Path(__file__).parent / "rodtep_claim_management" / "__init__.py").read_text(),
	about,
)
version = about["__version__"]

setup(
	name="rodtep_claim_management",
	version=version,
	description="Rodtep Claim Management",
	author="FinByz",
	author_email="info@finbyz.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
