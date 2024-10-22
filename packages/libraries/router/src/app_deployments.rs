use apollo_router::plugin::Plugin;
use apollo_router::plugin::PluginInit;
use core::ops::Drop;
use schemars::JsonSchema;
use serde::Deserialize;
use tower::BoxError;

pub struct AppDeploymentsPlugin {}

#[derive(Clone, Debug, Deserialize, JsonSchema)]
pub struct Config {}

#[async_trait::async_trait]
impl Plugin for AppDeploymentsPlugin {
    type Config = Config;

    async fn new(init: PluginInit<Config>) -> Result<Self, BoxError> {
        todo!("this")
    }
}

impl Drop for AppDeploymentsPlugin {
    fn drop(&mut self) {
        tracing::debug!("AppDeploymentsPlugin has been dropped!");
        // TODO: cleanup
    }
}
